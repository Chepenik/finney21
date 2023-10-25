import NostrButton from '../components/NostrButton';
import ContactButton from '../components/contactbutton';

const Error= () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl p-4">
      <h1 className="text-4xl mb-4 text-center">Oops, something went wrong!</h1>
      <p className="text-center mx-8">Please try submitting the form again. If the issue persists, please DM us on Nostr.</p>
      <ContactButton />
      <NostrButton />
    </div>
  );
};

export default Error;
