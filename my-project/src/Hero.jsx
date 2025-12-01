import React from 'react'
import { useState, useEffect } from 'react'

const Hero = () => {

  const [data, setdata] = useState([]);
  const [id, setid] = useState({
    id: null
  });
  const [ed, seted] = useState(false);
  const [val, setval] = useState(null);
  const [i, seti] = useState(null);
  const [v, setv] = useState(null);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem('data'));
    if (d.length === 0) {
      const data = [];
      localStorage.setItem("data", JSON.stringify(data));
      const i = JSON.parse(localStorage.getItem("data"));
      setdata(i);
    }
    else {
      setdata(JSON.parse(localStorage.getItem("data")));
    }
  }, [])

  function add() {
    const d = [...data, id];
    localStorage.setItem("data", JSON.stringify(d));
    setdata(JSON.parse(localStorage.getItem("data")));
  }

  function del(id) {
    const d = [...data];
    const dele = d.filter((el, i) => i !== id)
    localStorage.setItem("data", JSON.stringify(dele));
    setdata(JSON.parse(localStorage.getItem("data")));
  }

  function edit() {
    const d = [...data];
    d[val].id = id.id;
    localStorage.setItem("data", JSON.stringify(d));
    setdata(JSON.parse(localStorage.getItem("data")));
    seted(false);
  }

  function change(id) {
    const find = data.find((el, i) => i === id);
    console.log(find);
    seted(true)
    setval(id);
    setid(id);
    setv(find.id);
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <input type="text" className='border pl-2 w-xl h-12' placeholder={ed ? `${v}` : 'enter id'} onChange={(e) => setid({ id: e.target.value })} />
      <button onClick={ed ? edit : add} className='border w-12 h-12 ml-2'>Add</button>
      <div className='mt-3'>
        {data.length === 0 ? <>No Data</> : <>
          {data.map((el, i) => {
            return <div key={i} className='flex ml-4 gap-2'>
              <p>{el.id}</p>
              <button className='border' onClick={() => del(i)}>Delete</button>
              <button className='border' onClick={() => change(i)}>edit</button>
            </div>
          })}
        </>
        }
      </div>
    </div>
  )
}

export default Hero