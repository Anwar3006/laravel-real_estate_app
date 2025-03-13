import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import DropDownInput from '../DropDownInput';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import TextInput from '../TextInput';

const SearchCard = ({ className }: { className: string }) => {
  const { data, setData, get, errors } = useForm({
    'property-type': '',
    'price-range': '',
    'number-of-rooms': '',
    location: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    // get(route('login'));
    console.log(data);
  };
  return (
    <div
      className={`${className} flex h-auto flex-col rounded-2xl bg-[#dce1e2] pe-4 ps-4 pt-4 md:pe-9 lg:pe-24`}
    >
      <h2 className="text-base font-semibold tracking-wide md:text-xl">
        Find the best place
      </h2>
      <div className="flex items-center justify-center">
        <form
          onSubmit={submit}
          className="mt-4 grid grid-cols-2 items-center justify-between space-x-3 md:flex md:space-x-5"
        >
          <DropDownInput
            label="property-type"
            labelValue="Property Type"
            error={errors['property-type']}
            options={[
              'Single Family',
              'Apartment',
              'Condo',
              'Townhouse',
              'Villa',
              'Cottage',
            ]}
            handleChange={(e) => setData('property-type', e.target.value)}
            value={data['property-type']}
          />

          <DropDownInput
            label="price-range"
            labelValue="Price Range"
            error={errors['price-range']}
            options={[
              '$50,000 – $250,000',
              '$250,000 – $750,000',
              '$750,000 – $2,000,000',
              '$2M – $10M+',
              '$10M – $50M+',
            ]}
            handleChange={(e) => setData('price-range', e.target.value)}
            value={data['price-range']}
          />

          <DropDownInput
            label="number-of-rooms"
            labelValue="Number of Rooms"
            error={errors['number-of-rooms']}
            options={['1', '2', '3', '4', '5+']}
            handleChange={(e) => setData('number-of-rooms', e.target.value)}
            value={data['number-of-rooms']}
          />

          <div className="mx-auto mb-4 mt-4 md:min-w-40 md:max-w-44">
            <InputLabel htmlFor="location" value="Location" />

            <TextInput
              id="location"
              type="location"
              name="location"
              value={data.location}
              className="mt-1 block w-full px-2.5 py-1"
              onChange={(e) => setData('location', e.target.value)}
            />

            <InputError message={errors.location} className="mt-2" />
          </div>
        </form>
      </div>

      <div className="my-1 flex">
        <PrimaryButton
          className="col-span-2 !mx-auto mb-2 !rounded-2xl !py-3"
          onClick={submit}
        >
          Search Properties
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SearchCard;
