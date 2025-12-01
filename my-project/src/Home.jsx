import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addItem, deleteItems } from './slice/slice.js'

const Home = () => {

  const [id, setid] = useState(0)
  const item = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  console.log(item);
  console.log(id);

  function set() {
    dispatch(addItem(id));
  }

  function add(elem){
   setid(elem.target.value);
  }

  return (
    <div className='text-2xl text-center'>
      <input type="text" onChange={add} className='size-1/2 border'/>
      <button onClick={set}>Add</button>
      <button onClick={() => dispatch(deleteItems())} className='pl-2'>delete</button>
    </div>
  )
}

export default Home