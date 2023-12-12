import React from 'react';
// import './Formtable.css';

const Formtable = ({ handleSubmit, handleOnChange, rest }) => {
  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={handleOnChange}
              value={rest.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="flower">Flower Name:</label>
            <input
              type="text"
              id="flower"
              name="flower"
              placeholder="Enter Flower Name"
              onChange={handleOnChange}
              value={rest.flower}
            />
          </div>

          <div className="form-group">
            <label htmlFor="no">No. of Flowers:</label>
            <input
              type="text"
              id="no"
              name="no"
              placeholder="Enter No. of Flowers"
              onChange={handleOnChange}
              value={rest.no}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              onChange={handleOnChange}
              value={rest.address}
            />
          </div>

          <button id="bts" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formtable;
