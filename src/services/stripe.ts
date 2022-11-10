import Stripe from 'stripe'
import {version} from '../../package.json'

export const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo:{
            name: 'Ignews'
        }
    }
)