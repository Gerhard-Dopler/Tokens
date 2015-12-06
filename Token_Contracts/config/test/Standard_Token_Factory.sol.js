"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Standard_Token_Factory = (function (_Pudding) {
    _inherits(Standard_Token_Factory, _Pudding);

    function Standard_Token_Factory() {
      _classCallCheck(this, Standard_Token_Factory);

      _get(Object.getPrototypeOf(Standard_Token_Factory.prototype), "constructor", this).apply(this, arguments);
    }

    return Standard_Token_Factory;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Standard_Token_Factory.abi = [{ "constant": false, "inputs": [{ "name": "_initialAmount", "type": "uint256" }], "name": "createStandardToken", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "created", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "createdByMe", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" }];
  Standard_Token_Factory.binary = "60606040526105d3806100126000396000f3606060405260e060020a600035046305215b2f81146100315780635f8dead314610106578063dc3f65d314610142575b005b6101be600435600060006000600084604051610307806102cc833901908152604051908190036020019082f0925082915081600160a060020a031663a9059cbb33876040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506020604051808303816000876161da5a03f11561000257505050600160a060020a033316815260208190526040812080546001810180835591908290801582901161022557828552602085206102259181019083015b808211156102bb57600081556001016100f2565b6101be60043560243560006020819052828152604090208054829081101561000257506000908152602090200154600160a060020a0316905081565b6040805160208181018352600080835233600160a060020a0316815280825283902080548451818402810184019095528085526101db94928301828280156101b457602002820191906000526020600020905b8154600160a060020a0316815260019190910190602001808311610195575b5050505050905090565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b505050600160a060020a033316600090815260208190526040902080549192508491600019840190811015610002576040600090812092815260208120909101805473ffffffffffffffffffffffffffffffffffffffff191690931790925533600160a060020a03169091528054828255829190829080158290116102bf576000838152602090206102bf9181019083016100f2565b5090565b5094979650505050505050566060604052604051602080610307833950608060405251600160a060020a03331660009081526020819052604090208190556002819055506102c2806100456000396000f3606060405236156100615760e060020a6000350463095ea7b3811461006357806318160ddd146100d057806323b872dd146100de57806370a08231146101b2578063a9059cbb146101d6578063dd62ed3e1461025a578063fbf1f78a14610261575b005b6100d4600435602435600160a060020a03338116600081815260016020908152604080832094871680845294825282208054860190556060858152919392917f80da462ebfbe41cfc9bc015e7a9a3c7a2a73dbccede72d8ceb583606c27f8f909190a35060015b92915050565b6002545b6060908152602090f35b6100d4600435602435604435600160a060020a0383166000908152602081905260408120548290108015906101315750600160209081526040808320600160a060020a0386168452909152812054829010155b156101ab5760408082208054602084815290859003909155600160a060020a038581168085528385208054870190559087168085526001835283852082865283529284208054869003905560608581529092917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a35060015b9392505050565b6100d4600435600160a060020a0381166000908152602081905260409020546102b8565b6100d4600435602435600160a060020a0333166000908152602081905260408120548290106102bd57604080822080548490039055600160a060020a03808516808452918320805485019055606084815233909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a35060016100ca565b60006100d4565b600160a060020a033381166000818152600160209081526040808320600435958616808552925282208290556100d493927f1ab270601cc6b54dd5e8ce5c70dbac96a01ff12939e4e76488df62adc8e68373836060a35b919050565b6100ca56";

  if ("" != "") {
    Standard_Token_Factory.address = "";

    // Backward compatibility; Deprecated.
    Standard_Token_Factory.deployed_address = "";
  }

  Standard_Token_Factory.generated_with = "1.0.2";
  Standard_Token_Factory.contract_name = "Standard_Token_Factory";

  return Standard_Token_Factory;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Standard_Token_Factory = factory;
}