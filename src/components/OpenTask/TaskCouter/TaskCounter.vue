<template>
    <v-row justify="center">
        <v-col cols="8">
            Total：
            {{ totalCount }}
        </v-col>
        <v-col cols="2">
            Finished：
            {{ finishedCount }}
        </v-col>
        <v-col cols="2">
            NotFinished：
            {{ notFinishedCount }}
        </v-col>
    </v-row>
</template>