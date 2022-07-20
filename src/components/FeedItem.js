import React from 'react';
import {useAtom} from 'jotai';
import {Pressable, Text, Image, NativeModules, View} from 'react-native';
import {newsAtom} from '../jotai/newsAtom';
import moment from 'moment';
export default function FeedItem(props) {
  const [stNewsAtom, setNewsAtom] = useAtom(newsAtom);
  function getImage(desc) {
    const match = desc?.match(/\bhttps?:\/\/\S+/gi);
    console.log(props.itemInfo);
    console.log(match[0].replace('"/', '').replace('"', ''));
    return match[0].replace('"/', '').replace('"', '').replace('>', '');
  }
  const locale = NativeModules.I18nManager.localeIdentifier;
  moment.locale(locale.substring(2));
  return (
    <Pressable
      onPress={() => {
        props.onPress(),
          setNewsAtom({...stNewsAtom , html: props.itemInfo.description, title: props.itemInfo.title});
      }}
      style={{borderBottomWidth: 1}}>
      <Text style={{padding: 5}}>{props.itemInfo?.title}</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: getImage(props.itemInfo?.description),
          }}
        />
      </View>
      <Text style={{padding: 5}}>
        {moment(props.itemInfo?.created).format('LLL')}
      </Text>
    </Pressable>
  );
}
