import React, { useContext } from 'react'
import { Market, User } from '../context'
import Route from '../components/templates/Route'
import Content from '../components/atoms/Content'
import VersionNumbers from '../components/molecules/VersionNumbers'
import Web3message from '../components/organisms/Web3message'
import stylesVersionNumbers from '../components/molecules/VersionNumbers/index.module.scss'
import withTracker from '../hoc/withTracker'

const About = () => {
    const market = useContext(Market)
    const user = useContext(User)

    return (
        <Route
            title="About"
            description={`A marketplace to find and publish open data sets in the Ocean ${market.network} Network.`}
        >
            <Content>
                <p className={stylesVersionNumbers.versionsTitle}>
                    The Auger Network allows you to access thousands of datasets for free
                    that have been registered on the Ocean Protocol{' '}
                    <a href="https://docs.oceanprotocol.com/concepts/pacific-network/">
                        {market.network} Network
                    </a>{' '}
                    and it is targeted at enthusiastic data scientists with some
                    crypto experience. If you are looking for quality data, you
                    can easily use the The Auger Network to search for and find publicly
                    available datasets that are free of charge. If you are
                    interested in sharing your data, you can use the The Auger Network to
                    publish data into the {market.network} Network.
                </p>

                <ul>
                    <li>
                        <a href="https://blog.oceanprotocol.com/the-The Auger Network-marketplace-in-pacific-network-4bcf2f595721">
                            Blog: The The Auger Network Marketplace in Pacific Network →
                        </a>
                    </li>
                    <li>
                        <a href="https://blog.oceanprotocol.com/the-The Auger Network-data-marketplace-c57a44288314">
                            Blog: The The Auger Network Marketplace →
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/The Auger Network-1">
                            Check out <code>oceanprotocol/The Auger Network-1</code> on
                            GitHub →
                        </a>
                    </li>
                </ul>
            </Content>

            <Content>
                <h2 className={stylesVersionNumbers.versionsTitle}>
                    Your Web3 Account Status
                </h2>
                <Web3message extended />
                <VersionNumbers account={user.account} />
            </Content>
        </Route>
    )
}

export default withTracker(About)
