import React,{ useState, useEffect }from 'react';
import * as d3 from 'd3';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../Components/Navbar/Navbar';
import "./Graph.css";

const Graph2014 = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);

  useEffect(() => {
    d3.csv('cpi_2013.csv').then((csvData) => {
      setData1(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2014.csv').then((csvData) => {
      setData2(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2015.csv').then((csvData) => {
      setData3(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2016.csv').then((csvData) => {
      setData4(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2017.csv').then((csvData) => {
      setData5(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2018.csv').then((csvData) => {
      setData6(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2019.csv').then((csvData) => {
      setData7(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2020.csv').then((csvData) => {
      setData8(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2021.csv').then((csvData) => {
      setData9(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2022.csv').then((csvData) => {
      setData10(csvData);
    });
  }, []);
  useEffect(() => {
    d3.csv('cpi_2023.csv').then((csvData) => {
      setData11(csvData);
    });
  }, []);


  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
   const [showGraph, setShowGraph] = useState(false);
   const [dataKey1, setDataKey1] = useState('');
  const [dataKey2, setDataKey2] = useState('');
  const [data, setData] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (option2 === 'option2Value1'){
      setDataKey1("Goods");
      setDataKey2("Mean_cpi");}
    else if (option2 === 'option2Value2'){
      setDataKey1("Goods");
      setDataKey2("Jan");}
    else if (option2 === 'option2Value3'){
      setDataKey1("Goods");
      setDataKey2("Feb");}
    else if (option2 === 'option2Value4'){
      setDataKey1("Goods");
      setDataKey2("March");}
    else if (option2 === 'option2Value5'){
      setDataKey1("Goods");
      setDataKey2("Apr");}
    else if (option2 === 'option2Value6'){
      setDataKey1("Goods");
      setDataKey2("May");}
    else if (option2 === 'option2Value7'){
      setDataKey1("Goods");
      setDataKey2("June");}
    else if (option2 === 'option2Value8'){
      setDataKey1("Goods");
      setDataKey2("July");}
    else if (option2 === 'option2Value9'){
      setDataKey1("Goods");
      setDataKey2("Aug");}
    else if (option2 === 'option2Value10'){
      setDataKey1("Goods");
      setDataKey2("Sept");}
    else if (option2 === 'option2Value11'){
      setDataKey1("Goods");
      setDataKey2("Oct");}
    else if (option2 === 'option2Value12'){
      setDataKey1("Goods");
      setDataKey2("Nov");}
    else if (option2 === 'option2Value13'){
      setDataKey1("Goods");
      setDataKey2("Dec");}
  if (option1 === 'option1Value2'){
    setData(data1)
      setShowGraph(true);
  }
  else if (option1 === 'option1Value3'){
    setData(data2);
    setShowGraph(true);}
  else if (option1 === 'option1Value4'){
    setData(data3);
    setShowGraph(true);}
  else if (option1 === 'option1Value5'){
        setData(data4);
        setShowGraph(true);}
  else if (option1 === 'option1Value6'){
          setData(data5);
          setShowGraph(true);}
  else if (option1 === 'option1Value7'){
            setData(data6);
            setShowGraph(true);}
  else if (option1 === 'option1Value8'){
              setData(data7);
              setShowGraph(true);}
  else if (option1 === 'option1Value9'){
                setData(data8);
                setShowGraph(true);}
   else if (option1 === 'option1Value10'){
                  setData(data9);
                  setShowGraph(true);}
    else if (option1 === 'option1Value11'){
                    setData(data10);
                    setShowGraph(true);}
   else if (option1 === 'option1Value12'){
                      setData(data11);
                      setShowGraph(true);}
  else {
      setShowGraph(false);
    }
}
  



  return (
    <div className='all'>
      <Navbar/>
      <h1>Top Commodity(2013-2023)</h1>
      <div className='select'>
      <form onSubmit={handleSubmit}>
        <label>
          Year:
          <select value={option1} onChange={(e) => setOption1(e.target.value)}>
            <option value="option1Value1"></option>
            <option value="option1Value2">2013</option>
            <option value="option1Value3">2014</option>
            <option value="option1Value4">2015</option>
            <option value="option1Value5">2016</option>
            <option value="option1Value6">2017</option>
            <option value="option1Value7">2018</option>
            <option value="option1Value8">2019</option>
            <option value="option1Value9">2020</option>
            <option value="option1Value10">2021</option>
            <option value="option1Value11">2022</option>
            <option value="option1Value12">2023</option>
          </select>
        </label>
        <label>
          Month:
          <select value={option2} onChange={(e) => setOption2(e.target.value)}>
          <option value="option2Value0"></option>
          <option value="option2Value1">--</option>
            <option value="option2Value2">January</option>
            <option value="option2Value3">February</option>
            <option value="option2Value4">March</option>
            <option value="option2Value5">April</option>
            <option value="option2Value6">May</option>
            <option value="option2Value7">June</option>
            <option value="option2Value8">July</option>
            <option value="option2Value9">August</option>
            <option value="option2Value10">September</option>
            <option value="option2Value11">October</option>
            <option value="option2Value12">November</option>
            <option value="option2Value13">December</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    <div className='barall'>
    {showGraph && (
      <div className='back'>
      <BarChart 
          width={1000}
          height={500}
          data={data}
          
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom:150,
            
          }}>
          
          <CartesianGrid strokeDasharray="3 3" stroke="white" />

          <XAxis dataKey={dataKey1} stroke='white' angle={-90}textAnchor="end"/>
          <YAxis dataKey={dataKey2} domain={[50, 150]} stroke='white' label={{ value: 'CPI', angle: -90, position: 'insideLeft', stroke:"white" }}/>
          <Tooltip />
          
          <Bar dataKey={dataKey2} barSize={16} fill="rgb(5, 23, 46)"  activeBar={<Rectangle fill="#455b74" stroke="rgb(5, 23, 46)" />} />

        </BarChart>
        </div>
    )}
    </div>
    
    </div>
  )
}

export default Graph2014
