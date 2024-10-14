import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const TaskManagement:React.FC = () => {
    const [tasks, setTasks] = useState(['Task1','Task2', 'Task3', 'Task4'])
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data)=>{
        setTasks([...tasks, data.task])
        const input = document.getElementById("taskname");
        input.value = ""

    }

  return (
    <div className='ml-44 mt-4'>
        Tasks to Do:
        <table className="table-fixed border border-orange-400  border-separate border-spacing-2">
            <tbody >
            <tr className="table-fixed border  ">
                <td className=' underline border-orange-400'>
                    Id
                </td>
                <td className='underline border-orange-400'>
                    Task Name
                </td>
            </tr>
            {tasks.map((item ,id) =>
                <tr> 
                <td>{id} </td>
                <td>{item} </td></tr>)}
                </tbody>
                </table>
        <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <span className="block text-sm font-medium text-slate-700 mt-10">Add a new task</span>
            <input id='taskname'{...register("task", {required: true})} type="text" className='mt-1 w-[250px] px-3 py-2 bg-white border
             border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ' />
            {errors.task?.type === 'required' && <p role="alert">Task is required</p>}
            <br />
            <button type='submit' className="mt-4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-7 py-1 rounded-2xl text-white"> Add Task</button>
        </form>

        </div>

        
    </div>
  )
}

export default TaskManagement

function register(arg0: string, arg1: { required: boolean }): import("react/jsx-runtime").JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
    throw new Error('Function not implemented.')
}
