module.exports = {
  simulation: {
    base_component: "MyTabs",
    id: "tab1",
    children: [
      {
        components: [
          {
            base_component: "MyInput",
            text: "ID",
            id: "in1",
            attributes: {
              placeholder: "Please Type My ID",
            },
          },
          {
            base_component: "MyButton",
            text: "Customer validation",
            id: "btn1",
            click: {
              source_id: "in1",
              target_id: "lbl1",
            },
          },
          {
            base_component: "MyLabel",
            id: "lbl1",
          },
        ],
        title: "Tab 1",
      },
      
      {
        components: [],
        title: "Tab 2",
      },
      
      {
        components: [],
        title: "Tab 3",
      },
      
      
    ],
  },
};
