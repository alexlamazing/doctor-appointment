import SearchInput from './SearchInput';

type HeroProps = {
  onSearch: (value: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
  const handleSearchChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className='py-4'>
      <div>
        <div className='text-xl'>Hi, Alex</div>
        <h1 className='text-purple-950 text-4xl leading-snug font-semibold'>
          Let&#39;s find your doctor!
        </h1>
      </div>
      <SearchInput
        placeholder='Search doctor...'
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Hero;
