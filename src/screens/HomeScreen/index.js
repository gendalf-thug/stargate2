import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { searchChanged, getMovies } from '../actions'
import { ButtonLong, Header, ImageCard, Search } from '../../components'
import { nanoid } from 'nanoid/non-secure'
import { useSelector } from 'react-redux'

// const url = 'https://api.tvmaze.com/search/shows?q=stargate'

export function HomeScreen({ navigation }) {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [filterText, setFilterText] = useState('')

  const list = useSelector(state => state.movie.data).filter(a =>
    a.name.toLowerCase().includes(filterText.toLowerCase())
  )

  function onSearch(text) {
    setFilterText(text)
  }
  function goAddMovie() {
    navigation.navigate('ADD_MOVIE_SCREEN')
  }
  return (
    <SafeAreaView>
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
      <FlatList
        data={list}
        numColumns={2}
        ListHeaderComponent={
          <>
            <View style={{ height: 20 }} />
            <ButtonLong
              iconName="create-outline"
              title="Create new"
              onPress={goAddMovie}
            />
            <View style={{ height: 20 }} />
          </>
        }
        ListFooterComponent={<View style={{ height: 100 }} />}
        contentContainerStyle={{ alignItems: 'center' }}
        keyExtractor={item => nanoid()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ImageCard
            data={item}
            onPress={() => navigation.navigate('DETAIL_SCREEN', { show: item })}
          />
        )}
      />
    </SafeAreaView>
  )
}

// const mapStateToProps = state => {
//   return {
//     movie: state.search.movie,
//     data: state.search.data
//   }
// }

// export default connect(mapStateToProps, { searchChanged, getMovies })(HomeScreen)
