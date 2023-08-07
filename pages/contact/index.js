import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <div className='h-full bg-primary/30'>
            <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    {/* title */}
                    <motion.h2
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center md-12'
                    >
                        Let`s <span className='text-accent'>connect.</span>
                    </motion.h2>
                    {/* form */}
                    <motion.form
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex-1 flex flex-col gap-6 w-full mx-auto'
                    >
                        {/* group */}
                        <div className='flex gap-x-6 w-full'>
                            <div className='flex flex-col w-full'>
                                <input
                                    {...register('name', {
                                        required: 'Required field',
                                        minLength: {
                                            value: 4,
                                            message: 'Minimum 4 characters',
                                        },
                                    })}
                                    type='text'
                                    placeholder='Name'
                                    className='input'
                                />{' '}
                                <div className={errors?.name && 'block h-[30px] text-left px-4 py-2 '}>
                                    {errors?.name && (
                                        <p className='text-accent'>{errors?.name?.message || 'Invalid field!'} </p>
                                    )}
                                </div>
                            </div>

                            <div className='flex flex-col w-full'>
                                <input
                                    {...register('email', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Please enter a valid email',
                                        },
                                    })}
                                    type='text'
                                    placeholder='Email'
                                    className='input'
                                />
                                <div className={errors?.email && 'block h-[30px] text-left px-4 py-2 text-accent'}>
                                    {errors?.email && (
                                        <p className='text-accent'>{errors?.email?.message || 'Invalid field!'} </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* <input type='text' placeholder='subject' className='input' /> */}
                        <div>
                            <textarea
                                {...register('textarea', {
                                    required: 'Required field',
                                })}
                                placeholder='message'
                                className='textarea'
                            ></textarea>
                            <div className={errors?.textarea && 'block h-[30px] text-left px-4 py-2 text-accent'}>
                                {errors?.textarea && (
                                    <p className='text-accent'>{errors?.textarea?.message || 'Invalid field!'} </p>
                                )}
                            </div>
                        </div>

                        <button
                            disabled={!isValid}
                            type='submit'
                            className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-al duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
                        >
                            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                                Let`s talk
                            </span>
                            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
