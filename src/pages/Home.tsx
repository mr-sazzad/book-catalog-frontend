import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import NewBooks from '@/components/RecentlyAdded';

const Home = () => {
  return (
    <div>
      <Banner />
      <NewBooks />
      <Footer />
    </div>
  );
};

export default Home;
