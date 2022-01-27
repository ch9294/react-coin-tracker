import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoin} from "../api";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;
const Coin = styled.li`
  position: relative;
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    display: flex;
    align-items: center;
    transition: color .2s ease-in;
  }

  :hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.textColor}
`;

const Loader = styled.span`
  text-align: center;
`

const CoinImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string
}


const Coins = () => {
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoin);
    return <Container>
        <Header>
            <Title>코인</Title>
        </Header>
        <CoinsList>
            {
                isLoading ?
                    <Loader>
                        Loading...
                    </Loader>
                    :
                    data?.slice(0, 100).map((coin) => {
                        return (<Coin key={coin.id}>
                            <Link to={{
                                pathname: `/${coin.id}`,
                                state: {name: coin.name}
                            }}>
                                <CoinImg
                                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>);
                    })

            }
        </CoinsList>
    </Container>;
};

export default Coins;