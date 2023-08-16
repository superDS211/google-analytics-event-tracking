import { v4 as uuidv4 } from 'uuid';

// utils/gtag.js
export const pageview = (url) => {
  gtag("config", "G-0YC401WZQN", {
    page_path: url,
  });
};

export const event = ({ action, category, label, id}) => {

  gtag("event", action, {
    event_category: category,
    event_label: label,
    event_user: '12345',
  });
};
export const generateUserID = () => {
    return uuidv4();
  };