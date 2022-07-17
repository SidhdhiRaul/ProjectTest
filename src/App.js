import {Fragment} from 'react';
import Search from './component/search';
import Department from './component/Department';
import Location from './component/Location';
import Function from './component/Function';
import JobsOpening from './component/JobsOpening';

function App() {
  return (
    <Fragment>
      <Search></Search>
      <Department></Department>
      <Location></Location>
      <Function></Function>
      <JobsOpening></JobsOpening>
    </Fragment>
  );
}

export default App;
