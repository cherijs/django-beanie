from setuptools import setup

setup(
    name='django-beanie',
    version=__import__('beanie').VERSION,
    description='Modern theme for Django admin interface.',
    author='Artūrs Cirsis (cherijs)',
    author_email='arturs.cirsis@gmail.com',
    url='https://pixels.lv',
    packages=['beanie', 'beanie.templatetags'],
    zip_safe=False,
    include_package_data=True,
    classifiers=[
        'Development Status :: 1 - Production/Stable',
        'Framework :: Django',
        'License :: Free for non-commercial use',
        'Intended Audience :: Developers',
        'Intended Audience :: System Administrators',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.7',
        'Environment :: Web Environment',
        'Topic :: Software Development',
        'Topic :: Software Development :: User Interfaces',
    ]
)
