import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { differenceInYears } from 'date-fns';
import { Student } from '../../interfaces/Students';

export type StudentFormValues = Omit<Student, 'id'>;

interface Props {
  defaultValues?: Student;
  onSubmit: (data: StudentFormValues) => void;
  onCancel: () => void;
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dob: yup
    .date()
    .required('Date of birth is required')
    .test('age-range', 'Age must be between 18 and 21', (value) => {
      const age = differenceInYears(new Date(), value);
      return age >= 18 && age <= 21;
    }),
  gender: yup.string().oneOf(['Male', 'Female']).required('Gender is required'),
  class: yup.string().oneOf(['A', 'B', 'C']).required('Class is required'),
  address: yup.string().required('Address is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobile: yup
    .string()
    .required('Mobile is required')
    .matches(/^[0-9]{10}$/, 'Mobile must be 10 digits'),
});

const StudentForm = ({ defaultValues, onSubmit, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StudentFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4'
    >
      <div>
        <input
          placeholder='First Name'
          {...register('firstName')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        />
        <p className='text-red-500 text-sm'>{errors.firstName?.message}</p>
      </div>
      <div>
        <input
          placeholder='Last Name'
          {...register('lastName')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        />
        <p className='text-red-500 text-sm'>{errors.lastName?.message}</p>
      </div>
      <div>
        <Controller
          control={control}
          name='dob'
          render={({ field }) => (
            <DatePicker
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => field.onChange(date?.toISOString())}
              placeholderText='Select DOB'
              dateFormat='yyyy-MM-dd'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          )}
        />
        <p className='text-red-500 text-sm'>{errors.dob?.message}</p>
      </div>
      <div className='space-x-4'>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            value='Male'
            {...register('gender')}
            className='mr-1'
          />
          Male
        </label>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            value='Female'
            {...register('gender')}
            className='mr-1'
          />
          Female
        </label>
        <p className='text-red-500 text-sm'>{errors.gender?.message}</p>
      </div>
      <div>
        <select
          {...register('class')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        >
          <option value=''>Select Class</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
        </select>
        <p className='text-red-500 text-sm'>{errors.class?.message}</p>
      </div>
      <div>
        <textarea
          placeholder='Address'
          {...register('address')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        />
        <p className='text-red-500 text-sm'>{errors.address?.message}</p>
      </div>
      <div>
        <input
          placeholder='Email'
          {...register('email')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        />
        <p className='text-red-500 text-sm'>{errors.email?.message}</p>
      </div>
      <div>
        <input
          placeholder='Mobile'
          {...register('mobile')}
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
        />
        <p className='text-red-500 text-sm'>{errors.mobile?.message}</p>
      </div>
      <div className='flex justify-end space-x-4 pt-4'>
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
        >
          Save
        </button>
        <button
          type='button'
          onClick={onCancel}
          className='bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition'
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
