

export const API_DATA:any = [
      {
      title: 'Statistics',
      description: 'Get statistics about the shared delegate',
      method: 'GET',
      url: '/shareddelegateswebsitegetstatistics',
      result: [
        {
          "name": "public_address",
          "desc": "The main public address of the shared delegate"
        },
        {
          "name": "current_delegate_rank",
          "desc": "The current delegate rank"
        },
        {
          "name": "total_votes",
          "desc": "The total votes for the delegate"
        },
        {
          "name": "online_percentage",
          "desc": "The online percentage of the delegate (0-100). This is the amount of rounds the delegate was in the top 100 / the amount of rounds that the delegate was in the top 100 and online"
        },
        {
          "name": "total_blocks_found",
          "desc": "The total amount of blocks found by the shared delegate"
        },
        {
          "name": "total_xcash_from_blocks_found",
          "desc": "The total amount of xcash found by the shared delegate"
        },
        {
          "name": "total_payments",
          "desc": "The total amount of payments by the shared delegate"
        },
        {
          "name": "total_voters",
          "desc": "The total amount of votes, or xcash since one vote = one xcash, staked towards the shared delegate"
        },
        {
          "name": "fee",
          "desc": "The fee of each block reward set by the shared delegate"
        },
        {
          "name": "minimum_amount",
          "desc": "The minimum payment amount set by the shared delegate"
        }
      ],
      response: `
                {
                  "public_address":"XCA1v18Qsf5PKLr8GFr14jHkjgf3mPm1MAVbswBs9QP7FwGTLCE4SwYi81BRp2vrcV12maMtCw9TE1NZRVyynQ3e2c3b7mxRw3",
                  "current_delegate_rank":"5",
                  "total_votes":"10",
                  "online_percentage":"95",
                  "total_blocks_found":"5",
                  "total_xcash_from_blocks_found":"60",
                  "total_payments":"5",
                  "total_voters":"10",
                  "fee":"0.000000",
                  "minimum_amount":"0"
                }
                `.trim()
      },{
      title: 'Get Blocks Found',
      description: 'Show all blocks found by the shared delegate',
      method: 'GET',
      url: '/getblocksfound',
            parameters: [
        { "name": "start",
          "desc": "The start item (use 1 for the first item)"
        },
        {
          "name": "amount",
          "desc": "The amount of items to return (use all for max items)"
        }
      ],
      result: [
        {
          "name": "block_height",
          "desc": "The block height"
        },
        {
          "name": "block_hash",
          "desc": "The block hash"
        },
        {
          "name": "block_date_and_time",
          "desc": "The timestamp of when the shared delegate found the block"
        },
        {
          "name": "block_reward",
          "desc": "The block reward"
        },
        {
          "name": "block_count",
          "desc": "The average of when the block was excepted to be found compared to when it was found"
        }
      ],
      response: `[
        \xA0 {
        \xA0 \xA0   "block_height":"521850",
        \xA0 \xA0   "block_hash":"0000000000000000000000000000000000000000000000000000000000000000",
        \xA0 \xA0   "block_date_and_time":"10",
        \xA0 \xA0   "block_reward":"15"
        \xA0 },
        \xA0 {
        \xA0 \xA0   "block_height":"440850",
        \xA0 \xA0   "block_hash":"0000000000000000000000000000000000000000000000000000000000000000",
        \xA0 \xA0   "block_date_and_time":"10",
        \xA0 \xA0   "block_reward":"10"
        \xA0 }
    ]
      `.trim()
    },
    {
      title: 'Get Public Address Information',
      description: 'Get statistics about any delegate that has staked on the shared delegate',
      method: 'GET',
      url: '/getpublicaddressinformation',
      parameters: [
        {
          "name": "public_address",
          "desc": "The public address of the delegatE"
        }
      ],
      result: [
        {
          "name": "public_address",
          "desc": "The public address of the delegate"
        },
        {
          "name": "public_address",
          "desc": "The public address of the delegate"
        },
        {
          "name": "current_total",
          "desc": "The current total that the delegate has that will be paid once the minimum amount is reached"
        },
        {
          "name": "total",
          "desc": "The total amount that has been paid to the delegate"
        },
        {
          "name": "inactivity_count",
          "desc": "The total amount of days where the delegate has not staked towards the shared delegate. If the inactivity_count is 30 and the current_total is 0, the delegate is removed from the database"
        }
      ],
      response: `
      {
        "public_address":"XCA1v18Qsf5PKLr8GFr14jHkjgf3mPm1MAVbswBs9QP7FwGTLCE4SwYi81BRp2vrcV12maMtCw9TE1NZRVyynQ3e2c3b7mxRw3",
        "current_total":"5",
        "total":"10",
        "inactivity_count":"15"
      }
      `.trim()
    },
    {
      title: 'Get Public Address Payment Information',
      description: 'Get payment information about any delegate that has staked on the shared delegate',
      method: 'GET',
      url: '/getpublicaddresspaymentinformation',
      parameters: [
        { "name": "public_address",
          "desc": "The public address of the delegate"
        },
        { "name": "start",
          "desc": "The start item (use 1 for the first item)"
        },
        {
          "name": "amount",
          "desc": "The amount of items to return (use all for max items)"
        }
      ],
      result: [
        {
          "name": "public_address",
          "desc": "The public address of the delegate"
        },{
          "name": "date_and_time",
          "desc": "The timestamp of the payment"
        },{
          "name": "total",
          "desc": "The total amount of the payment"
        },{
          "name": "total_payments",
          "desc": "The total amount of payments by the shared delegate"
        },{
          "name": "tx_hash",
          "desc": "The transaction hash of the payment"
        },{
          "name": "tx_key",
          "desc": "The transaction key of the payment"
        }

      ],
      response: `[
      {
        "public_address":"XCA1v18Qsf5PKLr8GFr14jHkjgf3mPm1MAVbswBs9QP7FwGTLCE4SwYi81BRp2vrcV12maMtCw9TE1NZRVyynQ3e2c3b7mxRw3",
        "date_and_time":"5",
        "total":"10",
        "tx_hash":"TX_HASH",
        "tx_key":"TX_KEY"
      },
      {
        "public_address":"XCA1v18Qsf5PKLr8GFr14jHkjgf3mPm1MAVbswBs9QP7FwGTLCE4SwYi81BRp2vrcV12maMtCw9TE1NZRVyynQ3e2c3b7mxRw3",
        "date_and_time":"5",
        "total":"10",
        "tx_hash":"TX_HASH",
        "tx_key":"TX_KEY"
      }
      ]
      `.trim()
    },
    {
      title: 'Get Delegates Voters List',
      description: 'Get a list of all delegates staking towards the shared delegate',
      method: 'GET',
      url: '/getdelegatesvoterslist',
      parameters: [
        {
          "name": "parameter1",
          "desc": "The public address of the shared delegate."
        }
      ],
      result: [
        {
          "name": "public_address_created_reserve_proof",
          "desc": "The public address of the delegate that is staking towards the shared delegate"
        },{
          "name": "public_address_voted_for",
          "desc": "The public address of the shared delegate"
        },{
          "name": "total",
          "desc": "The total amount of the reserve proof"
        },{
          "name": "reserve_proof",
          "desc": "The reserve proof created by the delegate"
        }
      ],
      response: `[
                \xA0  {
                        "public_address_created_reserve_proof":"XCA1pEWxj2q7gn7TJjae7JfsDhtnhydxsHhtADhDm4LbdE11rHVZqbX5MPGZ9tM7jQbDF4VKK89jSAqgL9Nxxjdh8RM5JEpZZP",
                        "public_address_voted_for":"XCA1pEWxj2q7gn7TJjae7JfsDhtnhydxsHhtADhDm4LbdE11rHVZqbX5MPGZ9tM7jQbDF4VKK89jSAqgL9Nxxjdh8RM5JEpZZP",
                        "total":"120000000",
                        "reserve_proof":"ReserveProofV11BZ23sBt9sZJeGccf84mzyAmNCP3KzYbE1111112VKmH111118NDPqYHviiubTHpa5jPey2PF2RPr7p92nUY5PYcCqPwkM3Vezb1BvSAu2zX5kKMuJYo2q837KH4HAXkXbdgF6wa13pkkpuMxv74keNZLAeeM9wmSuJvSHmMvVjfo6u6iCWMDRESRouQ359NvpAZN71D9fSivgK7K7WkbNzftkUZ6V7Uza6K9eihTgu7hSB3AqaTm7cK9uTb5Fzg9LyJbC4phfGYM7bazM2UrVfitZtbEkKuhPxnzFzKkWtdYBB59zUo1uS4UUR8faS25sjfc2cPjZUfbEZsiJVo7EDNs3d1KdhTN5TdNxZK6MZgVB77jE9ed4jJUrNSrqfWg1BwigbN9smQicoi9yYwujuGaHEzEnLBwQeLFxJJQj31qRQb4ZijEBGrMxvcmybhPKiHA3LBARnBREJxkQ39dp2HRfEfR1G7z6RGhS9o1KQCF3MAwomCMCuj69SpeovPEYwQb5uVXti"
                 \xA0  },
                 \xA0  {
                        "public_address_created_reserve_proof":"XCA1v19Qsf5PKLr8GFr14jHkjgf3mPm1MAVbswBs9QP7FwGTLCE4SwYi81BRp2vrcV12maMtCw9TE1NZRVyynQ3e2c3b7mxRw3",
                        "public_address_voted_for":"XCA1pEWxj2q7gn7TJjae8JfsDhtnhydxsHhtADhDm4LbdE11rHVZqbX5MPGZ9tM7jQbDF4VKK89jSAqgL9Nxxjdh8RM5JEpZZP",
                        "total":"200000000",
                        "reserve_proof":"ReserveProofV11BZ23sBO9sZJeGccf84mzyAmNCP3KzYbE1111112VKmH111118NDPqYHviiubTHpa5jPey2PF2RPr7p92nUY5PYcCqPwkM3Vezb1BvSAu2zX5kKMuJYo2q837KH4HAXkXbdgF6wa13pkkpuMxv74keNZLAeeM9wmSuJvSHmMvVjfo6u6iCWMDRESRouQ359NvpAZN71D9fSivgK7K7WkbNzftkUZ6V7Uza6K9eihTgu7hSB3AqaTm7cK9uTb5Fzg9LyJbC4phfGYM7bazM2UrVfitZtbEkKuhPxnzFzKkWtdYBB59zUo1uS4UUR8faS25sjfc2cPjZUfbEZsiJVo7EDNs3d1KdhTN5TdNxZK6MZgVB77jE9ed4jJUrNSrqfWg1BwigbN9smQicoi9yYwujuGaHEzEnLBwQeLFxJJQj31qRQb4ZijEBGrMxvcmybhPKiHA3LBARnBREJxkQ39dp2HRfEfR1G7z6RGhS9o1KQCF3MAwomCMCuj69SpeovPEYwQb5uVXti"
                 \xA0  }
     ]
       `.trim()
    }
    ];
