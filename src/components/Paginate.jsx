'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Paginate = ({ onClickPage, page, totalPages }) => {
  const generateButton = (value, primary = false, label) =>
    (<FlatButton label={label || value.toString()} onClick={() => onClickPage(value)} primary={primary} style={{ minWidth: 'none', width: 'auto' }} key={value} />);

  const generateButtons = (totalPages, page) => {
    const size = totalPages < 10 ? totalPages : 10;
    let list = [];
    list.push(generateButton(1, page === 1));
    if (page <= 5) {
      for (let i = 2; i < size; i++) {
        list.push(generateButton(i, page === i));
      }
    } else {
      for (let i = page - 4; i < page; i++) {
        list.push(generateButton(i));
      }
      list.push(generateButton(page, true));
      if (page + 4 <= totalPages) {
        for (let i = page + 1; i < page + 4; i++) {
          list.push(generateButton(i));
        }
      }
    }
    (size > 1 && page !== totalPages) && list.push(generateButton(totalPages, page === totalPages));
    return list;
  }

  return (
    <CardActions style={{ justifyContent: 'center', display: 'flex' }}>
      {page > 1 && generateButton(page - 1, true, "Previous")}
      {generateButtons(totalPages, page)}
      {(totalPages > 1 && page !== totalPages) && generateButton(page + 1, true, "Next")}
    </CardActions>
  )
};

Paginate.propTypes = {
  onClickPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export { Paginate };