import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import Main
    from '../main/main'
import News
    from '../news/news'
import Chat
    from '../chat/chat'
import Mine
    from '../mine/mine'

import TabBarDataFromJson
    from './tabbardata.json'  //引入json文件

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'main',
            hidden: false,
            fullScreen: true
        }
    }

    //通过判断渲染不同的listView
    renderContent = () => {
        const selectedTab = this.state.selectedTab
        switch (selectedTab) {
            case 'main':
                return <Main/>
            case 'news':
                return <News/>
            case 'chat':
                return <Chat/>
            case 'mine':
                return <Mine/>

        }

    }

    render() {
        //分装 tabBar模板组件
        const TabBarItems = () => {
            const TabBarItemsTemplate = TabBarDataFromJson.TabBarItemsData.map((item, i) => {
                return (
                    <TabBar.Item
                        title={item.title}
                        key={item.key}
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `${item.icon_bg_url}`
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `${item.sele_bg_url}`
                                }}
                            />
                        }
                        selected={this.state.selectedTab === item.selectedPath}
                        onPress={() => {
                            this.setState({
                                selectedTab: `${item.selectedPath}`
                            })
                        }}
                    >
                        {this.renderContent()}
                    </TabBar.Item>
                )
            })
            return (
                <div
                    style={{
                        position: 'fixed',
                        height: '100%',
                        width: '100%',
                        top: 0
                    }}
                >
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                        tabBarPosition="bottom"
                    >
                        {TabBarItemsTemplate}
                    </TabBar>
                </div>
            )
        }


        return (
            <TabBarItems/>   //底部tabbar 分装的组件


        )
    }
}

export default Home
