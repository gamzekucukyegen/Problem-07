import Image from 'next/image'


function Avatar({profileText,imgSrc,name,className}) {
  return (
    <div className='group block p-8 flex-shrink-0'>
      <div className='flex items-center'>
        <div>
          <Image
            className='inline-block h-12 w-12 rounded-full'
            src={imgSrc}
            alt=''
            width={500}
            height={500}
          />
        </div>
        <div className='ml-3'>
          <p className={className}>
            {name}
          </p>
          <p className={className}>
            {profileText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return <>
  <Avatar profileText='Profile bakın' imgSrc='/photo.png' name="Tom Cook" className='text-sm font-medium text-gray-500 group-hover:text-gray-700'/>
  <Avatar profileText='Profile bakın' imgSrc='/photo.png' name="Jonh Cook" className='text-base font-medium text-gray-700 group-hover:text-gray-900'/>
  </>
}
