import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RenderCampsite from "../features/campsites/RenderCampsite";
import { COMMENTS } from '../shared/comments';

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  
  const [comments, setComments] = useState(COMMENTS);

  const renderCommentItem = ({ item }) => {
    return (
      <View style={StyleSheet.commentItem}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>Stars</Text>
        <Text style={{ fontSize: 12 }}>
          {`  ${item.author}, ${item.date}`}
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={comments.filter(
        (comment) => commment.campsiteId === campsite.id
      )}
      renderItem={renderCommentItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        marginHorizontal: 20,
        paddingVertical: 20

      }}
      ListHeaderComponent={
        <>
          <RenderCampsite campsite={campsite} />
          <Text style={StyleSheet.commentsTitle}>Comments</Text>
        </>
      }
      />
  )
};

export default CampsiteInfoScreen;
