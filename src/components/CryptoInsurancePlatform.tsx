'use client'

import React, { useState } from 'react'

export default function CryptoInsurancePlatform() {
  const [selectedAddress, setSelectedAddress] = useState<string>('')
  
  const walletOptions = [
    {
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      holdings: [
        { token: 'ETH', amount: '125.45', value: 250900 },
        { token: 'USDC', amount: '50000', value: 50000 },
        { token: 'BTC', amount: '2.5', value: 105000 }
      ],
      transactions: 245,
      lastActivity: '2024-12-15',
      riskScore: 'Low',
      totalValueUSD: 405900
    },
    {
      address: '0x123f68Aa8664C523Ed0B68DDc3fD5E30671e98c9',
      holdings: [
        { token: 'ETH', amount: '892.12', value: 1784240 },
        { token: 'USDT', amount: '150000', value: 150000 },
        { token: 'BTC', amount: '4.8', value: 201600 },
        { token: 'MATIC', amount: '25000', value: 35000 }
      ],
      transactions: 1456,
      lastActivity: '2024-12-17',
      riskScore: 'Medium',
      totalValueUSD: 2170840
    }
  ]

  const selectedWallet = selectedAddress ? walletOptions.find(w => w.address === selectedAddress) : null

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-black">Crypto Wallet Insurance Platform</h1>
      
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 text-black">Select Wallet Address</label>
        <select 
          className="w-full p-2 border rounded-lg bg-white text-black"
          value={selectedAddress}
          onChange={(e) => setSelectedAddress(e.target.value)}
        >
          <option value="" className="text-black">Choose a wallet...</option>
          {walletOptions.map((wallet) => (
            <option key={wallet.address} value={wallet.address} className="text-black">
              {`${wallet.address} ($${wallet.totalValueUSD.toLocaleString()} USD)`}
            </option>
          ))}
        </select>
      </div>

      {selectedWallet && (
        <div className="space-y-8">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6 text-black">Wallet Analysis</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="font-medium text-xl text-green-600">
                  ${selectedWallet.totalValueUSD.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Transactions</p>
                <p className="font-medium text-black">{selectedWallet.transactions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Activity</p>
                <p className="font-medium text-black">{selectedWallet.lastActivity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Risk Score</p>
                <p className={`font-medium ${
                  selectedWallet.riskScore === 'Low' ? 'text-green-600' :
                  selectedWallet.riskScore === 'Medium' ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {selectedWallet.riskScore}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-black">Token Holdings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedWallet.holdings.map((holding) => (
                  <div key={holding.token} className="border rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-black">{holding.token}</p>
                        <p className="text-sm text-gray-600">
                          {Number(holding.amount).toLocaleString()} tokens
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">
                          ${holding.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Available Insurance Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Basic',
                  coverage: selectedWallet.totalValueUSD * 0.5,
                  premium: (selectedWallet.totalValueUSD * 0.002).toFixed(2),
                  features: ['Theft Protection', 'Email Compromise Coverage', '24/7 Support']
                },
                {
                  name: 'Standard',
                  coverage: selectedWallet.totalValueUSD * 0.8,
                  premium: (selectedWallet.totalValueUSD * 0.003).toFixed(2),
                  features: ['Theft Protection', 'Email Compromise Coverage', '24/7 Support', 'Extended Value Coverage', 'Priority Claims']
                },
                {
                  name: 'Premium',
                  coverage: selectedWallet.totalValueUSD * 1.25,
                  premium: (selectedWallet.totalValueUSD * 0.004).toFixed(2),
                  features: ['Theft Protection', 'Email Compromise Coverage', '24/7 Support', 'Extended Value Coverage', 'Priority Claims', 'Multi-Chain Protection', 'Smart Contract Coverage']
                }
              ].map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`relative border rounded-lg p-6 bg-white ${index === 1 ? 'border-blue-500 border-2' : ''}`}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mt-2">
                    ${plan.premium}
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 mb-4">
                    Coverage up to ${plan.coverage.toLocaleString()}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-black">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}