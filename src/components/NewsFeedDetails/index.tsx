import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import {Divider} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {NewsFeed} from '../../models';

type NewsFeedDetailsProp = {
  route: {
    key: string;
    name: string;
    params: {
      newsFeed: NewsFeed;
    };
  };
};

const NewsFeedDetails = ({
  route: {
    params: {newsFeed},
  },
}: NewsFeedDetailsProp) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const newsFeedImage = () =>
    newsFeed.image_url ? (
      <Image
        source={{
          uri: newsFeed.image_url,
        }}
        style={styles.image}
      />
    ) : null;

  const newsFeedDescription = () =>
    newsFeed.full_description || newsFeed.description ? (
      <Text style={[styles.description, {color: colors.text}]}>
        {newsFeed.full_description || newsFeed.description}
      </Text>
    ) : null;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.title, {color: colors.text}]}>{newsFeed.title}</Text>
      <Divider />
      {newsFeed.creator && (
        <View style={styles.creators}>
          <Text style={[styles.creatorsNames, {color: colors.text}]}>
            {t('authors')}
            {newsFeed.creator.map(
              (name, index) =>
                ` ${name} ${index < newsFeed.creator.length - 1 ? ',' : ''}`,
            )}
          </Text>
        </View>
      )}
      <Text style={[styles.publishedDate, {color: colors.text}]}>
        {t('publishAt')} {newsFeed.pubDate}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderHeader()}
        {newsFeedImage()}
        {newsFeedDescription()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 5,
  },
  description: {
    padding: 15,
    marginBottom: 10,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  creators: {
    flexDirection: 'row',
    paddingTop: 10,
    textAlign: 'center',
  },
  creatorsNames: {
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  publishedDate: {
    paddingTop: 10,
  },
});

export default NewsFeedDetails;
