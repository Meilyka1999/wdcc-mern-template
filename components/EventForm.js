import { useForm } from 'react-hook-form'
import { logEvent } from '../lib/logEvent'

export const EventForm = ({ user }) => {
  const { register, handleSubmit } = useForm()
  function onSubmit (data) {
    console.log(data)
    const event = {
      name: user.nickname,
      type: 'form',
      value: data.value,
      comment: data.comment
      // date: added server side so we can't lie
    }
    logEvent(event)
  }

  return (
    <form
      className='max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Value
        <div className='mb-4'>
          <input
            name='value'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            ref={register}
            placeholder='value'
          />
        </div>
      </label>

      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Comment
        <div className='mb-4'>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='comment'
            ref={register}
            placeholder='comment'
          />
        </div>
      </label>

      <button className='btn-blue' type='submit'>Submit</button>
    </form>
  )
}
/* <form >
    <div class="mb-4">

      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form> */
export default EventForm
