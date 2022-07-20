import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmptyList, Header, ImageCard, Loading, Search } from '../../components'
import { nanoid } from 'nanoid/non-secure'
import { useGetMovieQuery } from '../../store/movieApi'

export function HomeScreen({ navigation }) {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [filterText, setFilterText] = useState('stargate')

  const { data, error, isLoading } = useGetMovieQuery(filterText)
  function onSearch(text) {
    setFilterText(text ? text : 'stargate')
  }
  return (
    <View style={{ flex: 1 }}>
      {visibleSearch ? (
        <Search
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          value={filterText}
          onSubmit={onSearch}
          onBlur={() => setVisibleSearch(false)}
        />
      ) : (
        <Header
          title={'Search'}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={() => setVisibleSearch(true)}
        />
      )}
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <EmptyList />
      ) : (
        <FlatList
          data={data.filter(a => (a?.show?.image?.original ? true : false))}
          numColumns={2}
          ListHeaderComponent={<View style={{ height: 20 }} />}
          ListFooterComponent={<View style={{ height: 100 }} />}
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={() => nanoid()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ImageCard
              data={item}
              onPress={() => navigation.navigate('DETAIL_SCREEN', { data: item.show })}
            />
          )}
        />
      )}
    </View>
  )
}

// const mapStateToProps = state => {
//   return {
//     movie: state.search.movie,
//     data: state.search.data
//   }
// }

// export default connect(mapStateToProps, { searchChanged, getMovies })(HomeScreen)
