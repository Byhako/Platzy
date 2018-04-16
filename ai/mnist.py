from tensorflow.examples.tutorials.mnist import input_data
import tensorflow as tf

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True) 

# matriz de ceros de 28 x 28
x = tf.placeholder(tf.float32, [None, 784])

w = tf.Variable(tf.zeros([784, 10]))
b = tf.Variable(tf.zeros([10]))

# inicializo el modelo
y = tf.nn.softmax(tf.matmul(x, w) + b)

y_ = tf.placeholder(tf.float32, [None, 10])
cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_ * tf.log(y), reduction_indices=[1]))

# entrenamos el modelo.
train_step = tf.train.GradientDescentOptimizer(0.05).minimize(cross_entropy)

# seccion interactiva TF
sess = tf.InteractiveSession()

# variables globales
tf.global_variables_initializer().run()
#tf.initialize_all_variables().run()

for _ in range(1000):
  batch_xs, batch_ys = mnist.train.next_batch(100)
  sess.run(train_step, feed_dict = {x: batch_xs, y_:batch_ys})

# ahora vamos a comprobar que tan bien esta entrenado mi modelo

correct_predicction = tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1))
accuracy = tf.reduce_mean(tf.cast(correct_predicction, tf.float32))

print(sess.run(accuracy, feed_dict = {x: mnist.test.images, y:mnist.test.labels}))



"""
En y estan los valores predichos,
en y_ estan los valores originales
"""