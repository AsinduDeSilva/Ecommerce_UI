import React from 'react'
import { ListItem } from '../ListItem/ListItem'
import './ListView.css';

export const ListView = () => {
  return (
    <div className='list'>
        <ListItem title="Samsung Galaxy A03s" img="https://celltronics.lk/wp-content/uploads/2021/09/Samsung-Galaxy-A03s-1.jpg"/>
        <ListItem title="Huawei Nova Y70" img="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova-y70/list/list-blue.png"/>
        <ListItem title="Apple iPhone 11 64GB" img="https://d2bschjhk4kxui.cloudfront.net/assets/images/product/62d9c2fb066c11658438395.webp"/>
        <ListItem title="Apple iPhone 13 Pro 128GB" img="https://www.queensmobiles.lk/wp-content/uploads/2022/10/Apple-iPhone-13-ProUsed.jpg"/>
        <ListItem title="Apple iPhone SE 3 (2022) 64GB" img="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled5357.png"/>
    </div>
  )
}
