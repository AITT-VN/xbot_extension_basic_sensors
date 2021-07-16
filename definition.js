Blockly.Blocks["xbot_light_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 đọc cảm biến ánh sáng cổng %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/4W6Ty3Y/light.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_sound_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 đọc cảm biến âm thanh cổng %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/1mM59bs/sound.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_bumper_pressed"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 cảm biến bumper cổng %1 phát hiện chạm ở %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/n6sxPFM/limit-switch.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_moisture_sensor"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 đọc cảm biến đất cổng %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/F7D1hvs/poster.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_touch_sensor"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 cảm biến chạm cổng %1 chân %2 được chạm",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/y8q7VxF/a26-512.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_gas_sensor"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 đọc cảm biến gas cổng %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/k4sQR5Y/CO.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_pir_sensor"] = {
  init: function () {
    this.jsonInit({
      colour: "#7A91B7",
      tooltip: "",
      message0: "%3 cảm biến chuyển động cổng %1 chân %2 phát hiện",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "1"],
            ["2", "2"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/YfBkPMp/PIR.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

// PYTHON
Blockly.Python["xbot_light_sensor_read"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin"+ port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_sound_sensor_read"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin"+ port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python["xbot_bumper_pressed"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_moisture_sensor"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_touch_sensor"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin +".read_digital()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_gas_sensor"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin +".read_analog()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_pir_sensor"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  var code = "pin" + port + pin +".read_digital()";
  return [code, Blockly.Python.ORDER_NONE];
};