import axios from 'axios';


const listEditors = async (credentials) => {
  try {
    const response = await axios.get('https://stocksgainer.com/api/editors', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.token
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};


// Handle Change Status Color Mode 
export const getStatusColorClass = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100';
    case 'added':
      return 'bg-pink-200';
    case 'done':
      return 'bg-green-200';
    case 'prob_mail_sent':
      return 'bg-blue-200';
    default:
      return '';
  }
};

// format Date and Time
export const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDate = new Date(dateString).toLocaleString('en-US', options);
  return formattedDate;
};



export {
  listEditors
}