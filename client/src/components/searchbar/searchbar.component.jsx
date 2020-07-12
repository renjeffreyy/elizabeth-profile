import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      this is the searchbar
      <InputGroup>
        <FormControl placeholder="Search" />
        <InputGroup.Append>
          <Button>search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Searchbar;
