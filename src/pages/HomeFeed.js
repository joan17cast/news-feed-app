import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {parse} from 'rss-to-json';

// * Components
import FeedItem from '../components/FeedItem';

const initState = {
  loading: false,
};

export default function HomeFeed({navigation}) {
  const [state, setState] = useState(initState);
  useEffect(() => {
    getNewsFeed();
  }, []);

  async function getNewsFeed() {
    setState({...state, loading: true});
    const rss = await parse('http://www.xatakandroid.com/tag/feeds/rss2.xml');
    let items = rss.items.slice(0);
    items.sort(function (a, b) {
      console.log();
      return a.created - b.created;
    });
    console.log(items);
    setState({...state, items: items, loading: false});
    console.log(rss);
  }
  return (
    <SafeAreaView>
      <FlatList
        refreshing={state.loading}
        onRefresh={getNewsFeed}
        data={state?.items}
        renderItem={({item}) => (
          <FeedItem
            onPress={() => {
              navigation.navigate('News');
            }}
            itemInfo={item}
          />
        )}
      />
    </SafeAreaView>
  );
}
