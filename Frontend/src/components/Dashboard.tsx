import React from 'react'
import { useForm } from 'react-hook-form';
import manimage from '../assets/portrait-of-a-successful-business-man-isolated-on-white-PG55RP.jpg'
const Dashboard:React.FC= () => {
    const onSubmit = (data)=>{
        console.log(data)
    }
    const {register, handleSubmit, formState: {errors}} = useForm();
  return (

    <div className=' text-center '>
    <h1 className='text-7xl text-orange-600 mt-10' >Jack</h1>
    <h6 className='text-3xl text-slate-600 mt-2' ></h6>
    <img src={manimage} width={300} alt=""  className='block m-auto'/>
    <p className='w-[400px] block m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corporis tenetur provident architecto esse eaque numquam ullam neque fugiat eius rem fuga accusamus distinctio voluptates ea enim dolor dolorum vero sed optio expedita exercitationem quisquam molestias qui! Et laudantium in, voluptatum dignissimos facilis rerum sit officia, enim nam delectus consectetur omnis voluptatibus hic perspiciatis praesentium magni! Totam deleniti nesciunt, similique sint labore perferendis a dolorem nam placeat cumque minima deserunt odit sapiente eveniet possimus ducimus consequuntur. Officiis, saepe nemo sit numquam aliquam odit nostrum iure! Nostrum error natus, unde rerum officiis beatae ab voluptatum recusandae numquam nesciunt, ipsum, doloremque similique?</p>

    
</div>
  )
}

export default Dashboard