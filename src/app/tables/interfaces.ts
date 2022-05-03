export interface blocksfounddata {
  id: string;
  block_height: string;
  block_hash: string;
  block_date_and_time: string;
  block_reward: string;
}

export interface processednamesdata {
  id: string;
  name: string;
  action: string;
  amount: string;
  timestamp: string;
}

export interface voterslistdata {
  id: string;
  public_address_created_reserve_proof: string;
  total: string;
  reserve_proof: string;
}

export interface voterstatisticsdata {
  id: string;
  payment_name: string;
  payment_address: string;
  date_and_time: string;
  tx_hash: string;
  tx_key: string;
  total: string;
}
