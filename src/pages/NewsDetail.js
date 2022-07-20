import React from 'react';
import { useAtom } from 'jotai'
import RenderHtml from 'react-native-render-html';
import {ScrollView, useWindowDimensions, Text} from 'react-native';
import { newsAtom  } from '../jotai/newsAtom'
export default function NewsDetail() {
  const {width} = useWindowDimensions();
  const [stNewsAtom] = useAtom(newsAtom)
  return (
    <ScrollView style={{padding: 10}}>
      <Text style={{fontSize: 21, fontWeight: "bold", color: "black" }}>{stNewsAtom.title}</Text>
      <RenderHtml contentWidth={width} source={stNewsAtom} />
    </ScrollView>
  );
}
