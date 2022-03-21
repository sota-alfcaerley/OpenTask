<template>
    <div>
        <v-card color="grey lighten-5">
            <v-container>
                <v-row>
                    <v-card-title>
                        OpenTask
                    </v-card-title>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn
                            color="blue darken-4"
                            dark
                            @click="onToggleIsFinished()">
                        Add Task
                        </v-btn>
                            <AddTaskDialog />
                    </v-col>
                    <v-col cols="12">
                        <Counter />
                    </v-col>
                    <v-col v-for="(task, taskIdx) in taskList" :key="taskIdx" cols="12">
                        <Tasks
                            :no="taskIdx + 1"
                            :task-idx="taskIdx"
                            :title="task.title"
                            :limit="task.limit"
                            :priority="task.priority" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>