import { environment } from '@/app/api/contentful/client';
import { User } from '@/app/types/types';
import { getSession } from '@auth0/nextjs-auth0';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import { useUserStore } from '@/app/store/user';

const MainTemplate = async ({ children }: { children: React.ReactNode }) => {
	const user = await handleUser();

  return (
    <>
      <Header user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;

const handleUser = async () => {
	const session = await getSession();
	let user: User | undefined;

	if(session?.user) {
		user = {
      username: session.user.name,
      email: session.user.email,
      picture: session.user.picture,
    };

		const existingUsers = await environment.getEntries({
			content_type: 'user',
			'fields.email[match]': user.email
		});

		if(existingUsers.items.length === 0) {
			const id = uuidv4();

      const entry = await environment.createEntry('user', {
        fields: {
          username: {
            'en-US': user.username,
          },
          email: {
            'en-US': user.email,
          },
          picture: {
            'en-US': user.picture,
          },
          userId: {
            'en-US': id,
          },
        },
      });

      await entry.publish();
			user.userId = id;
			useUserStore.getState().setUser(user)
		} else {
			const userId = existingUsers.items[0].fields.userId['en-US'];
			user.userId = userId;
			useUserStore.getState().setUser(user)
			return user
		}
	} else {
		const reset = useUserStore.getState().reset
		reset()
	}
}