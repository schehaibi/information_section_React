import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from './Loading';
;


const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try{
    const response = await fetch(url);
    const newdata = await response.json();
    setJobs(newdata);
    setLoading(false);
  }catch(exeption)
  {
    return  (<Loading />)
  }
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (<main>
      <Loading />
    </main>)
  }
const {title,dates,duties,company}=jobs[value]

  return <section className='section'>
  <div className="title">
  <h2>experience</h2>
  <div className="underline"></div>
</div>
<div className="jobs-center">
<div className="btn-container">
  {jobs.map((item,index)=>{
    return <button key={item.id}  onClick={()=>
    
      setValue(index)
    }
    className={`job-btn ${index===value && 'active-btn'}`}
    >{item.company}</button>
  })
  }
</div>
  <article className='job-info'>
    <h3>{title}</h3>
    <h4>{company}</h4>
    <p className="job-date">{dates}</p>
      {duties.map((duties,index)=>{
        return (<div key={index} className='job-desc'>
          <FaAngleDoubleRight className='job-icon'/>
          {duties}
        </div>)
      })}
    
  </article>
</div>
  </section>
}

export default App
