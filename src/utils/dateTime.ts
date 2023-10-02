import moment from 'moment';

export const formatDateTime = ((date: string) => (date ? moment(date).fromNow() : date));
