import { legacy_createStore as createStore } from 'redux';

// Step1:   Reducer Function
const bankReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // alert(action.type);
    let  updatedState = {};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.balance =  0;   
            break; 

        case "DEPOSIT":
            updatedState.balance =  state.balance + parseFloat(action.amount);
            break;
            
        case "WITHDRAW":
            const withDrawalAmount=parseFloat(action.amount);
            if(state.balance -withDrawalAmount<500)  
            {
                alert("Insufficient Fund minimum balance should be 500");
                updatedState.balance =  state.balance;
            }
            else
            {
                updatedState.balance =  state.balance - parseFloat(action.amount);
            }
            break;
        default:
           updatedState = state;
           break;
      }

      return updatedState;
};

// Step2:  Create Store
const bankStore = createStore(bankReducer);
export default bankStore;