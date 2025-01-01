// // SPDX-License-Identifier: MIT
// pragma solidity >=0.7.0 <0.9.0;

// contract Hospital {
//     struct Treatment {
//         string diseases;
//         string medication;
//         bool status;
//     }
    
//     struct Data {
//         Treatment[] treatments;
//     }
    
//     mapping(address => Data) private _data;
    
//    function addTreatment(
//        Treatment memory _t
//     ) public {
//         _data[msg.sender].treatments.push(
//             _t
//         );
//     }

    
//     function getTreatments(address patient) public view returns (Treatment[] memory) {
//         return _data[patient].treatments;
//     }
//     function updateTreatmentStatus(string memory diseases, bool status) public {
//     Treatment[] storage treatments = _data[msg.sender].treatments;
//     for (uint i = 0; i < treatments.length; i++) {
//         if (keccak256(bytes(treatments[i].diseases)) == keccak256(bytes(diseases))) {
//             treatments[i].status = status;
//         }
//     }
// }

// }
