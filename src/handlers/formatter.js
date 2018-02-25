'use strict';
import moment from 'moment';

export const formatDate = value => moment(value).format('MM/DD/YYYY');