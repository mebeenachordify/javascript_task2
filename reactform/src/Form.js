// import { useForm } from 'react-hook-form';
// import './Form.css';

// export default function Form() {
//     const { register, handleSubmit, formState: { errors }, watch } = useForm()
//     console.log("errors", errors);
//     const firstName = (watch("firstName"));


//     return (
//         <div>
//             <h2>REACT HOOK FORM</h2>
//             <form onSubmit={handleSubmit((data) => {
//                 console.log(data)
//             })}>
//                 <input {...register("firstName", { required: "firstName  is required", minLength: { value: 4, message: "Min length is 4" } })}
//                     placeholder="Enter your firstName" />
//                 <p>{firstName}</p>
//                 <p>{errors.firstName?.message}</p>

//                 <input {...register("age", { required: "This is required" })}
//                     placeholder="Enter your age" />
//                 <p>{errors.age?.message}</p>
//                 <input type="submit" />
//             </form>

//         </div>
//     )
// }

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Form.css';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(4, 'Minimum length is 4 characters'),
  age: Yup.number().required('Age is required'),
});

export default function Form() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const firstName = watch('firstName');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>REACT HOOK FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName')}
          placeholder="Enter your firstName"
        />
        <p>{firstName}</p>
        <p>{errors.firstName?.message}</p>

        <input
          {...register('age')}
          placeholder="Enter your age"
        />
        <p>{errors.age?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
