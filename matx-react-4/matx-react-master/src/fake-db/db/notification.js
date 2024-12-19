import Mock from "../mock";
import shortId from "shortid";

const NotificationDB = {
  list: [
    {
      id: shortId.generate(),
      heading: "Workflow",
      icon: { name: "chat", color: "primary" },
      timestamp: 1570702802573,
      title: "Bom Issue Management",
      subtitle: "Pending Requests: 10",
      path: "chat"
    },
    // {
    //   id: shortId.generate(),
    //   heading: "Alert",
    //   icon: { name: "notifications", color: "error" },
    //   timestamp: 1570702702573,
    //   title: "Server overloaded",
    //   subtitle: "Traffice reached 2M",
    //   path: "page-layouts/user-profile"
    // },
    {
      id: shortId.generate(),
      heading: "Workflow",
      icon: { name: "chat", color: "primary" },
      timestamp: 1570502502573,
      title: "Create Project",
      subtitle: "Pending Requests: 2",
      path: "chat"
    }
  ]
};

Mock.onGet("/api/notification").reply(() => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/add").reply(() => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/delete").reply((config) => {
  let { id } = JSON.parse(config.data);
  console.log(config.data);

  const response = NotificationDB.list.filter((notification) => notification.id !== id);
  NotificationDB.list = [...response];
  return [200, response];
});

Mock.onPost("/api/notification/delete-all").reply(() => {
  NotificationDB.list = [];
  const response = NotificationDB.list;
  return [200, response];
});
