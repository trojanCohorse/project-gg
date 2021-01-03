import { useState, useEffect, } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const NewReferencesDisplay = ()=> {
  const [ approvalData, setApprovalData ] = useState({});
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://project-gg.herokuapp.com/seasons/approve`
    }).then(res => {
      console.log('Stuff to approve', res.data[0].references);
      setApprovalData(res.data[0].references);
    }).catch(err => console.log(err));
  }, [])
  console.log(approvalData);
  return null;
}

export default NewReferencesDisplay;