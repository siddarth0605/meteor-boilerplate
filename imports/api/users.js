//Standard Imports
import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';


Accounts.validateNewUser((user)=>{
    const email = user.emails[0].address
    const emailSchema = new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    })

    emailSchema.validate({email})

    return true
  });