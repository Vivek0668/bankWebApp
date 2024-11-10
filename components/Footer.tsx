import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface FooterProps {
  user: {
    firstName: string;
    email: string;
  };
  type?: 'desktop' | 'mobile';
}

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogOut = async () => {
    setLoading(true);
    setError(null);

    try {
      const loggedOut = await logoutAccount();

      if (loggedOut) {
        router.push('/sign-in');
      } else {
        setError('Logout failed. Please try again.');
      }
    } catch (err) {
      console.error('Logout error:', err);
      setError('An error occurred while logging out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      {/* Display logout button */}
      <div className="footer_image" onClick={handleLogOut}>
        {loading ? (
          <div className="spinner">Logging out...</div>
        ) : (
          <Image src="icons/logout.svg" fill alt="Logout" />
        )}
      </div>

      {/* Display error message if logout fails */}
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </footer>
  );
};

export default Footer;
